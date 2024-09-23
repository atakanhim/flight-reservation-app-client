export function calculateTimeDifference(startTime: string, endTime: string): string {
    // Zaman damgalarını Date nesnelerine dönüştürme
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
  
    // Milisaniye cinsinden farkı hesaplama
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
  
    // Milisaniyeleri gün, saat, dakika ve saniyeye çevirme
    const seconds = Math.floor((differenceInMilliseconds / 1000) % 60);
    const minutes = Math.floor((differenceInMilliseconds / 1000 / 60) % 60);
    const hours = Math.floor((differenceInMilliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
    // Sonucu formatlama
    return `${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye`;
  }
