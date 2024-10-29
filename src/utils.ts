
  declare global {
    interface Window {
      gtag: (event: string, action: string, params: { [key: string]: any }) => void;
    }
  }

  const phoneNumber = "5548999652972";

  export const  generateWhatsappLink = (message: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16755974704/mkfGCI7Y7eIZELDE77U-',
      });
    }
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;
  }