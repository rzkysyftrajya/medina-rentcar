export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Terakhir diperbarui: 8 Juli 2024. Harap baca syarat dan ketentuan ini dengan saksama sebelum menggunakan layanan kami.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary">1. Definisi</h2>
              <p>
                <strong>"Kami"</strong>, <strong>"Perusahaan"</strong>, atau <strong>"Medina Rentcar"</strong> merujuk pada penyedia layanan sewa kendaraan.
                <strong>"Anda"</strong> atau <strong>"Penyewa"</strong> merujuk pada individu atau entitas yang menyewa kendaraan dari kami.
                <strong>"Kendaraan"</strong> merujuk pada mobil yang disewakan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary">2. Persyaratan Penyewa (Lepas Kunci)</h2>
              <ul className="list-disc list-outside space-y-2 pl-6">
                <li>Penyewa wajib memiliki Surat Izin Mengemudi (SIM A) yang masih berlaku.</li>
                <li>Penyewa wajib menyerahkan fotokopi atau foto asli dari Kartu Tanda Penduduk (E-KTP), SIM A, dan satu dokumen identitas tambahan (NPWP, Paspor, atau ID Card Perusahaan).</li>
                <li>Penyewa dari luar kota diwajibkan untuk menunjukkan bukti tiket pesawat kedatangan sebagai jaminan tambahan.</li>
                <li>Perusahaan berhak menolak permohonan sewa jika penyewa tidak memenuhi persyaratan verifikasi yang ditentukan.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary">3. Penggunaan Kendaraan</h2>
               <ul className="list-disc list-outside space-y-2 pl-6">
                <li>Kendaraan tidak boleh digunakan untuk kegiatan ilegal, termasuk namun tidak terbatas pada balapan, tindak kriminal, atau mengangkut barang terlarang.</li>
                <li>Penyewa bertanggung jawab penuh atas semua denda parkir, pelanggaran lalu lintas, dan biaya tol selama masa sewa.</li>
                <li>Kendaraan tidak boleh digadaikan atau disewakan kembali kepada pihak ketiga.</li>
                <li>Penggunaan kendaraan hanya diizinkan untuk wilayah yang telah disepakati saat pemesanan. Penggunaan di luar wilayah yang disepakati harus mendapatkan persetujuan tertulis dari kami.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary">4. Pembayaran dan Durasi Sewa</h2>
               <ul className="list-disc list-outside space-y-2 pl-6">
                <li>Durasi sewa harian adalah 24 jam.</li>
                <li>Biaya kelebihan waktu (overtime) adalah 10% dari harga sewa per hari untuk setiap jamnya. Kelebihan lebih dari 5 jam akan dihitung sebagai biaya sewa 1 hari penuh.</li>
                <li>Pembayaran uang muka (DP) minimal 50% diperlukan untuk konfirmasi pemesanan.</li>
                <li>Pelunasan dilakukan pada saat serah terima kendaraan di awal masa sewa.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-primary">5. Asuransi dan Kerusakan</h2>
              <ul className="list-disc list-outside space-y-2 pl-6">
                <li>Semua kendaraan kami dilindungi oleh asuransi All Risk (kerusakan komprehensif).</li>
                <li>Jika terjadi kecelakaan yang mengakibatkan kerusakan pada kendaraan, penyewa wajib menanggung biaya klaim asuransi (Own Risk/Deductible) sesuai ketentuan polis.</li>
                <li>Penyewa wajib segera melaporkan setiap kerusakan atau kecelakaan kepada kami dalam waktu 1x24 jam.</li>
                <li>Asuransi tidak mencakup kerusakan yang disebabkan oleh kelalaian penyewa (misalnya: kunci hilang, kerusakan interior karena merokok, banjir, atau kerusuhan). Biaya perbaikan untuk kerusakan tersebut akan ditanggung sepenuhnya oleh penyewa.</li>
              </ul>
            </section>
            
             <section>
              <h2 className="text-2xl font-bold text-primary">6. Pembatalan</h2>
              <ul className="list-disc list-outside space-y-2 pl-6">
                <li>Pembatalan yang dilakukan lebih dari 24 jam sebelum waktu sewa dimulai, uang muka akan dikembalikan 50%.</li>
                <li>Pembatalan yang dilakukan kurang dari 24 jam sebelum waktu sewa dimulai, uang muka tidak dapat dikembalikan (hangus).</li>
              </ul>
            </section>

            <p className="pt-8 border-t border-border/20">
              Dengan melakukan pemesanan, Anda dianggap telah membaca, memahami, dan menyetujui semua syarat dan ketentuan yang tercantum di halaman ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
