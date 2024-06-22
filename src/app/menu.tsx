interface NavbarItem {
    label: any;
    url?: any; // url adalah opsional karena dropdown item tidak memiliki url
  // subItems adalah opsional dan bisa berisi array NavbarItem
  }
  
  // 2. Membuat array item navbar
  const navbarItems: NavbarItem[] = [
    { label: "Home", url: "/" },
    { label: "Tentang Kami", url: "/about" },
    { label: "Rincian Biaya", url: "/rincian-biaya" },
    { label: "SPK", url: "/spk"},
    { label: "Contact", url:"/contact-us"}
    
  ];

export default navbarItems;