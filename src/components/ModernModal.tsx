import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';

interface DemoFormProps {
  trigger: React.ReactNode;
}

interface FormData {
  user_name: string;
  user_email: string;
  user_phone: string;
  company_name: string;
}

const initialFormData: FormData = {
  user_name: '',
  user_email: '',
  user_phone: '',
  company_name: ''
};

const validatePhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 9;
};

export function DemoForm({ trigger }: DemoFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) {
      console.log('Form ref is null');
      return;
    }

    if (!validatePhone(formData.user_phone)) {
      console.log('Phone validation failed', formData.user_phone);
      return;
    }

    try {
      setIsLoading(true);
      console.log('Sending demo request...'); 
      
      const result = await emailjs.sendForm(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log('Demo request sent successfully', result);
      setFormData(initialFormData);
      setShowSuccess(true);

    } catch (error) {
      console.error('Failed to send demo request:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle>Запись на демонстрацию</DialogTitle>
              <DialogDescription>
                Оставьте свои контакты, и мы свяжемся с вами для демонстрации возможностей Poster
              </DialogDescription>
            </DialogHeader>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="user_name">Имя</Label>
                <Input
                  id="user_name"
                  name="user_name"
                  placeholder="Введите ваше имя"
                  value={formData.user_name}
                  onChange={(e) => setFormData({...formData, user_name: e.target.value})}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_email">Email</Label>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="example@mail.com"
                  value={formData.user_email}
                  onChange={(e) => setFormData({...formData, user_email: e.target.value})}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_phone">Телефон</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <img 
                      src="https://flagcdn.com/w20/tj.png" 
                      alt="Tajikistan flag"
                      className="w-4 h-3 object-cover"
                    />
                    <span className="text-sm text-muted-foreground">+992</span>
                  </div>
                  <InputMask
                    mask="(99) 999-99-99"
                    value={formData.user_phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setFormData(prev => ({
                        ...prev,
                        user_phone: e.target.value
                      }));
                    }}
                    disabled={isLoading}
                    required
                  >
                    {(inputProps: any) => (
                      <Input
                        {...inputProps}
                        id="user_phone"
                        name="user_phone"
                        type="tel"
                        placeholder="(__) ___-__-__"
                        className="pl-20"
                        disabled={isLoading}
                        required
                      />
                    )}
                  </InputMask>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company_name">Компания</Label>
                <Input
                  id="company_name"
                  name="company_name"
                  placeholder="Название компании"
                  value={formData.company_name}
                  onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                  required
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  "Отправить"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <DialogTitle className="mb-2">Заявка отправлена</DialogTitle>
            <DialogDescription>
              Спасибо за интерес к Poster! Наш менеджер свяжется с вами в ближайшее время для организации демонстрации.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}