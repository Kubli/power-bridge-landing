import { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import nodemailer from 'nodemailer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Configure your SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com", // Replace with your SMTP host
    port: 587, // Replace with your SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
      user: "your-email@example.com", // Replace with your email
      pass: "your-password" // Replace with your password
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email
      await transporter.sendMail({
        from: '"Contact Form" <your-email@example.com>', // Replace with your email
        to: "recipient@example.com", // Replace with recipient email
        subject: `New Contact Form Submission from ${formData.name}`,
        text: `
          Name: ${formData.name}
          Email: ${formData.email}
          Message: ${formData.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        `,
      });

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-msblue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-msblue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-msblue-500 focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-msblue-500 text-white rounded-lg hover:bg-msblue-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center text-gray-600">
              <Mail className="h-5 w-5 mr-2" />
              <span>contact@isku.digital</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;