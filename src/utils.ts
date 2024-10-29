
  declare global {
    interface Window {
      gtag: (event: string, action: string, params: { [key: string]: any }) => void;
    }
  }

  const phoneNumber = "5548999652972";

  export const  generateWhatsappLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;
  }