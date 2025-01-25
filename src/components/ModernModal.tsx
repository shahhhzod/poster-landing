// components/ModernModal.tsx
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
   import { useState } from "react";
   
   interface DemoFormProps {
    trigger: React.ReactNode;
   }
   
   export function DemoForm({ trigger }: DemoFormProps) {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      company: ''
    });
   
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission
      console.log(formData);
    };
   
    return (
      <Dialog>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Запись на демонстрацию</DialogTitle>
            <DialogDescription>
              Оставьте свои контакты, и мы свяжемся с вами для демонстрации возможностей Poster
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+992 (999) 999-99-99"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Компания</Label>
              <Input
                id="company"
                placeholder="Название компании"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <Button type="submit" className="w-full">Отправить</Button>
          </form>
        </DialogContent>
      </Dialog>
    );
   }