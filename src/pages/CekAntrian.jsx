import React from "react";
import { FaChevronLeft, FaRegClock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const CekAntrian = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const {noAntri, logo, nama, giliran, jumlahAntrian} = location.state || {}
  console.log(noAntri);

  const handleButtonBAck = () => {
    navigate('/antrian')
  }
  return (
    <div className="min-h-[100vh] bg-dominan">
      <div className="header fixed top-0 left-0 right-0 w-[500px] mx-auto bg-aksen py-5 font-medium text-white">
        <div className="back flex items-center px-5">
          <FaChevronLeft
            size={25}
            className="my-auto text-white me-5"
            onClick={handleButtonBAck}
          />
          <h2 className="text-lg">Detail Antrian</h2>
        </div>
      </div>

      {/* Detail Antrian */}
      <div className="mt-[68px] p-5">
        <div className="rounded-lg bg-bg overflow-hidden">
          <div className="header font-medium px-3 py-5 mb-5 border-b">
            <h2 className="text-xl mb-1">{nama}</h2>
            <div className="estimasi flex items-center text-[14px]">
              <h6>Estimasi waktu giliran :</h6>
              <h6 className="ms-2 border rounded-md px-2 bg-orange-100 border-orange-300">Jam {giliran}</h6>
            </div>
          </div>
          <div className="main px-5 pb-5">
            <div className="font-medium text-center">
              <h4>No. Antrian</h4>
              <h2 className="text-[70px] -my-3">{noAntri}</h2>
            </div>
            <div className="box-informasi-antri grid grid-cols-2 font-medium py-10">
              <div className="terakhir text-center border-r">
                <h2>Terakhir Dilayani</h2>
                <h3 className="text-[30px]">A-00</h3>
              </div>
              <div className="menunggu text-center">
                <h2>Menunggu</h2>
                <h3 className="text-[30px]">1</h3>
              </div>
            </div>

            <div className="jumlah-antrian font-medium flex items-center mb-3">
              <h5 className="me-2">
                Jumlah Antrian{" "}
                <span className="px-2 text-[14px] py-[2px] text-black rounded border">
                  {jumlahAntrian}
                </span>
              </h5>
              <h5>
                Batal{" "}
                <span className="px-2 text-[14px] py-[2px] text-black rounded border">
                  0
                </span>
              </h5>
            </div>

            {/* pengumuman */}
            <div className="box-perhatian">
              <h4 className="font-medium">Perhatian</h4>
              <div className="box-message text-[14px] p-2 bg-orange-100 rounded-lg border border-orange-300">
                <p>
                  Untuk Anda yang sudah mengambil nomor antrian, harap datang
                  10-15 menit sebelum giliran Anda dilayani!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CekAntrian;
