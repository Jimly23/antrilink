import axios from "axios";
import { gacoan, logoBca, logoEls, logoMargono, logoPajak, tempatBca, tempatEls, tempatGacoan, tempatMargono, tempatPajak, tempatPrinting } from "../assets";

export const layanan = [
  {id: 1,logo: gacoan, tempatImg: tempatGacoan, nama: 'Gacoan Purwokerto', deskripsi:'Restoren - Mie', alamat:'Arcawinangun, Purwokerto Timur', waktu:'07:15 - 22:00', kategori:'makanan', maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.460729847381!2d109.25134197453352!3d-7.414151473018375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f4b2e15c697%3A0x8aa70d2081517e45!2sMie%20Gacoan%20Purwokerto!5e0!3m2!1sid!2sid!4v1719362016546!5m2!1sid!2sid'},
  {id: 2,logo: logoBca, tempatImg: tempatBca, nama: 'BCA Purwokerto', deskripsi:'Bank', alamat:'Purwanegara, Purwokerto Timur', waktu:'07:15 - 22:00', kategori:'bank', maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31650.849404325643!2d109.20174121856691!3d-7.425777915203009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e6296a20957%3A0x9fb2fbe39c771f1b!2sBCA%20KCU%20PURWOKERTO!5e0!3m2!1sid!2sid!4v1719361486634!5m2!1sid!2sid'},
  {id: 3,logo: logoEls, tempatImg: tempatEls, nama: 'ELS Purwokerto', deskripsi:'Laptop - Komputer', alamat:'Kauman Lama, Purwokerto Timur', waktu:'07:15 - 22:00', kategori:'service center', maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3516173612084!2d109.23785207453356!3d-7.426284373153202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e84ad3c0569%3A0x5344818f337d13f6!2sELS%20Computer%20Purwokerto!5e0!3m2!1sid!2sid!4v1719362093258!5m2!1sid!2sid'},
  {id: 4,logo: logoMargono, tempatImg: tempatMargono, nama: 'RSU Margono', deskripsi:'Rumah Sakit Umum', alamat:'Sokanegara, Purwokerto Timur', waktu:'07:15 - 22:00', kategori:'kesehatan', maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63302.96271272817!2d109.16562795639037!3d-7.416995453077098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e5e2681822b%3A0x6f2f44510e1a1516!2sRSUD%20Margono%20Soekarjo%20Paviliun%20Abiyasa%20Geriatri!5e0!3m2!1sid!2sid!4v1719362213681!5m2!1sid!2sid'},
  {id: 5,logo: logoPajak, tempatImg: tempatPajak, nama: 'Kantor Pajak', deskripsi:'Pajak', alamat:'Kebondalem, Purwokerto Timur', waktu:'07:15 - 22:00', kategori:'pemerintahan', maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.381849269489!2d109.23865657453347!3d-7.422924673115869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e1431d72edb%3A0xb761e96f2c7a9c8a!2sKantor%20Pajak%20Purwokerto!5e0!3m2!1sid!2sid!4v1719362293143!5m2!1sid!2sid'},
  {id: 6,logo: tempatPrinting, tempatImg: tempatPrinting, nama: 'Champions Printing', deskripsi:'Printing - Kaos', alamat:'Kranji, Purwokerto Timur', waktu:'07:15 - 22:00', kategori:'printing', maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.313522196171!2d109.23538647453371!3d-7.430515773200295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f235a0397e3%3A0x1a1b15d6dc8bfbd6!2sChampions%20Digital%20Printing%20Purwokerto!5e0!3m2!1sid!2sid!4v1719362571628!5m2!1sid!2sid'},
]

const listAntrian = []
const antrianFavorit = []

export const dataMock = async (data) => {
    try {
      const response = await axios.post("https://4d5c66eb-38a9-44c2-a706-db1812cda4c5.mock.pstmn.io/api/auth/login", data);
      return response.data
    } catch(error){
      console.log(error)
    }
}

export const getLayananByCategory = (category) => {
  const result = layanan.find(l => l.kategori === category)
  return result
}

export const getLayananByName = (nama) => {
  const result = layanan.find(l => l.nama === nama)
  return result
}

export const addAntrian = (data) => {
  listAntrian.push(data)
}

export const getAllAntrian = () => {
  const result = listAntrian
  return result
}

export const addAntrianFavorit = (data) => {
  antrianFavorit.push(data)
}

export const getAntrianFavorit = () => {
  const result = antrianFavorit
  return result
}