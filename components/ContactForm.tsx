"use client";


import { useId, useState, useTransition } from "react";
import { MessageSquareText } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/lib/resend"; // ✅ directly imported server action
import { toast } from "sonner";
import ContactInput from "./contactInput";
import { Spinner } from "./ui/spinner";



export default function ContactForm() {
  const id = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [social, setSocial] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [loading ,setLoading] = useState(false);
   const [phone, setPhone] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      const success = await sendEmail({ name, email, social, message , phone });
      setLoading(true);

      if (success) {
        setLoading(false);
        toast.success('Email sended,we will reach out you soon!', {
          style: {
            '--normal-bg':
              'color-mix(in oklab, light-dark(var(--color-green-600), var(--color-green-400)) 10%, var(--background))',
            '--normal-text': 'light-dark(var(--color-green-600), var(--color-green-400))',
            '--normal-border': 'light-dark(var(--color-green-600), var(--color-green-400))'
          } as React.CSSProperties
        });
        setName("");
        setEmail("");
        setSocial("");
        setMessage("");
      } else {
        setLoading(false);
        toast.error('Failed to send email. Please try again.', {
          style: {
            '--normal-bg': 'color-mix(in oklab, var(--destructive) 10%, var(--background))',
            '--normal-text': 'var(--destructive)',
            '--normal-border': 'var(--destructive)'
          } as React.CSSProperties
        })
      }
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
         <p className='hover:text-white transition'>
            Contact
         </p>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[425px] md:max-w-[550px]">
        <div className="flex flex-col gap-2 sm:gap-4">
          <DialogHeader className="gap-y-2 sm:gap-y-3 md:gap-y-3">
            <div className="space-y-0.5 sm:space-y-1">
                <DialogTitle className="text-left text-base sm:text-lg leading-tight">Global Headquarters:</DialogTitle>
                <DialogDescription className="text-left text-sm sm:text-base leading-relaxed">Corporate Center,1600 Golf Road, Suite 1200,Rolling Meadow, IL 60008</DialogDescription>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
                <DialogTitle className="text-left text-base sm:text-lg leading-tight">India Headquarters</DialogTitle>
                <DialogDescription className="text-left text-sm sm:text-base leading-relaxed">Corporate Annexe, 8th Floor, #802, Sonawala Lane,Goregoan East, Mumbai 400063</DialogDescription>
            </div>
            <div className="flex items-center gap-2">
                <DialogTitle className="text-base sm:text-lg leading-tight whitespace-nowrap">Email :</DialogTitle>
                <a href="mailto:info@intellisuite.in" className="text-blue-400 text-sm sm:text-base leading-relaxed">info@intellisuite.in</a>
            </div>
            <div className="flex items-center gap-2">
                <DialogTitle className="text-base sm:text-lg leading-tight whitespace-nowrap">Contact no :</DialogTitle>
                <a href="tel:+916287886087" className="text-blue-400 text-sm sm:text-base leading-relaxed">+91 6287886087</a>
            </div>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
          <div className="space-y-3 sm:space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`name-${id}`}>Name</Label>
              <Input
                id={`name-${id}`}
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`email-${id}`}>Email</Label>
              <Input
                id={`email-${id}`}
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="*:not-first:mt-2">
                 <ContactInput phoneNumber={phone} setPhoneNumber={setPhone} />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`message-${id}`}>Message</Label>
              <Textarea
                id={`message-${id}`}
                placeholder="Tell us about your dashboard needs"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="w-full bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium"
          >
            {isPending ? <Spinner/> : "Send"}
          </Button>

          <Button
            type="button"
            size="lg"
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium"
          >
            Cancel
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}