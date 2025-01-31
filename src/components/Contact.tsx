// components/Contact.tsx
import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';

interface FormData {
  user_name: string;
  user_phone: string;
  message: string;
}

const initialFormData: FormData = {
  user_name: '',
  user_phone: '', 
  message: ''
};

const validatePhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 9; // Проверяем только 9 цифр после кода страны
};

export function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData); 
    
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
      console.log('Sending email...'); 
      
      const result = await emailjs.sendForm(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      );
  
      console.log('Email sent successfully', result); 
  
      setFormData(initialFormData);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
  
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsLoading(false);
    }
};


  return (
    <section id="contacts" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 text-left">
          <div>
            <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-muted-foreground mb-8">
              Готовы ответить на ваши вопросы и помочь с выбором решения
            </p>

            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Телефон</p>
                  <a href="tel:+992985000000" className="text-muted-foreground hover:text-primary">
                    +992 (985) 00-00-00
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@poster.tj" className="text-muted-foreground hover:text-primary">
                    info@poster.tj
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="text-muted-foreground">
                    Душанбе, ул. Примерная, 123
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="space-y-4 p-6 bg-card rounded-lg border text-left">
  <div className="grid sm:grid-cols-2 gap-4">
    <div>
      <label htmlFor="user_name" className="text-sm font-medium">Имя</label>
      <Input
        id="user_name"
        name="user_name"
        placeholder="Введите имя"
        value={formData.user_name}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
    </div>
    <div>
      <label htmlFor="user_phone" className="text-sm font-medium">Телефон</label>
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
  </div>
  <div>
    <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
    <Textarea
      id="message"
      name="message"
      placeholder="Ваше сообщение"
      className="min-h-[150px]"
      value={formData.message}
      onChange={handleChange}
      required
      disabled={isLoading}
    />
  </div>
  <Button disabled={isLoading} className="w-full">
    {isLoading ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Отправка...
      </>
    ) : (
      "Отправить сообщение"
    )}
  </Button>
</form>
        </div>
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <DialogTitle className="text-center">Сообщение отправлено</DialogTitle>
            <p className="text-center text-muted-foreground">
              Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
            </p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}