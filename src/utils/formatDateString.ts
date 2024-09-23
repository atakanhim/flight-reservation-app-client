export const formatDateString = (dateString) => {
    const date = new Date(dateString); // Gelen string tarihini Date nesnesine çeviriyoruz

    // Saat ve dakika ayarları
    const time = date.toLocaleString('en-US', {
        hour: 'numeric', minute: 'numeric', hour12: true
}); // 12 saat formatında alıyoruz

    // Tarih ayarları
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit'
    }); // Formatlı tarihi alıyoruz

    // Tarihi YYYY-MM-DD formatında almak için düzeltme
    const [month, day, year] = formattedDate.split('/'); // Ay, gün ve yıl parçalama
    const finalDate = `${year}-${month}-${day}`; // İstenilen format

    return [time, finalDate]; // İstenilen dizi formatında döndürüyoruz
};

