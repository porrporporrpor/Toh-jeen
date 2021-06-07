const getMenu = async () => {
  const menuList = [
    {
      name: 'ห่อหมก - ออเดิร์ฟ',
      category: 'อาหารจานหลัก',
      description: '',
      image:
        'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/66508660_2554157824603904_1536224323340075008_o.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeEKWSe7tbLMYUCwtwjmz99AxK4Dk5nC1bPErgOTmcLVsz2slFbArbID2LGkh42O6gkbxd-60whS3iKlX-geioP4&_nc_ohc=mBMj2RRRTlsAX_kWsjf&_nc_ht=scontent.fbkk22-3.fna&oh=2416fca9a442108b48d9599c55063362&oe=600DEE36',
    },
    {
      name: 'หมูมะนาว - หลนเต้าเจี้ยว',
      category: 'อาหารจานหลัก',
      description: '',
      image:
        'https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/66324490_2554156831270670_3941337306803208192_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeH3CEP6lRFU3dWJaAKwn7PUVScOsmp-UrNVJw6yan5Ssw6oJHDfhxLIAHiOMj794sKyodCe5tQHCTV5VEcEAyCZ&_nc_ohc=EtuiQxO1UWcAX-LBDDs&_nc_ht=scontent.fbkk22-6.fna&oh=901c16acd3a7ce80481496375956a775&oe=600BFBBF',
    },
    {
      name: 'ผัดฉ่าปลากระพง',
      category: 'อาหารจานหลัก',
      description: '',
      image:
        'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/66361057_2554156727937347_5812299050342416384_o.jpg?_nc_cat=110&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeFr_lZkOzAt9scp58QHQSWNSHVqZbnwCIhIdWplufAIiOfnnm1K6ayXXt0SEEuA23S-AcvOZBkEHq2Ab2DNhUoK&_nc_ohc=qrJpRyd7a2oAX-9DyKE&_nc_ht=scontent.fbkk22-3.fna&oh=7c17a748ddcc4fa6c602417d4d77bfb3&oe=600CB904',
    },
    {
      name: 'ผัดเผ็ดหมูป่า - ยำปลาดุกฟู',
      category: 'อาหารจานหลัก',
      description: '',
      image:
        'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/66477962_2554158174603869_6303232654296743936_o.jpg?_nc_cat=101&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeGMoqgOR62x1tRvzZ7BabWM_Gt8UHmJszz8a3xQeYmzPBSuHOXV1OwEp0UYKa8CShAvnB_wtE5dUWrURwvP3bQe&_nc_ohc=i2YHKX1x2mkAX-A_aPE&_nc_ht=scontent.fbkk22-1.fna&oh=3732deaae020172a452bbba7e14d3867&oe=600CAF50',
    },
    {
      name: 'ปูหลน - ปลาสามรส',
      category: 'อาหารจานหลัก',
      description: '',
      image:
        'https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/66581325_2554159157937104_3306999800011948032_o.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeGKwO_4QVBMsLP4IIgqYiBkuAR7EDg0ObS4BHsQODQ5tK3AaSlNyRNjWXJKXpvewbwNirjcLQ8Yau46gqbDpv_f&_nc_ohc=Dp3UobB63UoAX-86WYR&_nc_ht=scontent.fbkk22-6.fna&oh=43cc53b5b5d29e6ea4934891da4ca7e5&oe=600DEFC2',
    },
    {
      name: 'ยำหอยนางรม - ยำรวมทะเล',
      category: 'อาหารจานหลัก',
      description: '',
      image:
        'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/66611166_2554157704603916_2893905322882105344_o.jpg?_nc_cat=106&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeExZzaDaGWy-RzramzxUzwkH0EcD4OkdOcfQRwPg6R0577FJPUSMv-R71YucE27QgYL2UgJ0JS0zXaVV7v4Pk41&_nc_ohc=AlpIwp6K1FUAX8n0ATP&_nc_ht=scontent.fbkk22-2.fna&oh=e417f3fae40d0a9c0745eda84eba041a&oe=600E659F',
    },
    {
      name: 'แพนง - น้ำพริกกระปิ',
      category: 'อาหารจานหลัก',
      description: '',
      image:
        'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/66753954_2554158917937128_6636977052287238144_o.jpg?_nc_cat=100&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeG0vdBXF2lDGzeN5FUXXYhHpuctBDBkTl6m5y0EMGROXtUFgDHLLe8j6YLYoLfru7fBbK-KSrfKLQQhQdKM2Ky9&_nc_ohc=kceI85Y6C3IAX8HX2IO&_nc_ht=scontent.fbkk22-1.fna&oh=5b43f2a6368ea0faecd6978f81752ace&oe=600E38A8',
    },
    {
      name: 'กะเพาะปลา - กะเพาะปลาผัดแห้ง',
      category: 'อาหารจานหลัก',
      description: '',
      image:
        'https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/66851711_2554157381270615_6046450904859672576_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeFU1OTpCtHo-5HPxmBeBJNaji3xp6RcZZyOLfGnpFxlnJfV3WVPYrjZ695xs3UoEo6LS3VOFoVKZ0ZXIsOZaDnH&_nc_ohc=Gu8rp9gv4QQAX8wa_dk&_nc_ht=scontent.fbkk22-6.fna&oh=22014d49a5b39196fac68198285158bc&oe=600DD2BE',
    },
    {
      name: 'ไก่ตุ๋นยาจีน - ปลากระพงนึ่งซีอิ๊ว',
      category: 'อาหารจานหลัก',
      description: '',
      image:
        'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/66857614_2554157877937232_1510713428782612480_o.jpg?_nc_cat=107&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeE9SUNbgpZgB5EKMO6SIyJ0pRz1T3q65JqlHPVPerrkmnnyaVLCKd7JPtRhTfN05_g-_avKef7oe4NwPdk_TCW1&_nc_ohc=g05L5DNIRKMAX8gwh6g&_nc_ht=scontent.fbkk22-2.fna&oh=dca259b3a39b9aca2104c61176e288dc&oe=600B00F8',
    },
    {
      name: 'ผลไม้รวม - ของหวานทับทิมกรอบ',
      category: 'ของหวาน',
      description: '',
      image:
        'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/66585075_2554156541270699_5147646663648608256_n.jpg?_nc_cat=106&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeF0IfNkygteg0fYyoOCm0ynTOoa9ipaqIFM6hr2Klqogb5ljCOZ6XUemtLPKohOuQ20RXCBfhD3nS8mRYL8LwLD&_nc_ohc=28eSdRK2zjkAX9g74H-&_nc_ht=scontent.fbkk22-2.fna&oh=b7e8bacb083d54cd8ef21369096863fa&oe=600CF555',
    },
  ];
  return menuList;
};

export const menuService = { getMenu };
