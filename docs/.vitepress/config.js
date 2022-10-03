import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'id-ID',
  title: 'Klearance Online',
  description: 'Aplikasi Pelaporan Bea Cukai',
  head:[['link', { rel: "shortcut icon", href: "/logo.ico"}]],

  lastUpdated: true,
   themeConfig: {
    logo: '/CDMS.svg',
    siteTitle: false,
    nav: nav(),
    sidebar: {
      '/fiturumum/': [
        {
          text: 'Master',
          collapsible: true,
          items: [
            { text: 'Produk', link: '/fiturumum/master/produk' }, 
            { text: 'UOM', link: '/fiturumum/master/uom' }, 
            { text: 'Kurs', link: '/fiturumum/master/kurs' }, 
          ]
        },
        {
          text: 'Administrasi',
          collapsible: true,
          items: [
            { text: 'User', link: '/documentcustoms/25' }, 
            { text: 'Group', link: '/documentcustoms/27' }, 
            { text: 'Akun Perusahaan', link: '/documentcustoms/30' }, 
            { text: 'Template Penandatangan', link: '/documentcustoms/41' }, 
            { text: 'Pengaturan', link: '/documentcustoms/261' }, 
          ]
        }
      ],
      '/documentcustoms/': [
        {
          text: 'Dokumen Pemasukan',
          items: [
            { text: 'BC 2.3', link: '/documentcustoms/23' }, 
            { text: 'BC 2.6.2', link: '/documentcustoms/262' }, 
            { text: 'BC 2.7', link: '/documentcustoms/27' }, 
            { text: 'BC 4.0', link: '/documentcustoms/40' }, 
          ]
        },
        {
          text: 'Dokumen Pengeluaran',
          items: [
            { text: 'BC 2.5', link: '/documentcustoms/25' }, 
            { text: 'BC 2.7', link: '/documentcustoms/27' }, 
            { text: 'BC 3.0', link: '/documentcustoms/30' }, 
            { text: 'BC 4.1', link: '/documentcustoms/41' }, 
            { text: 'BC 2.6.1', link: '/documentcustoms/261' }, 
            { text: 'BC 2.5 Scrap', link: '/documentcustoms/25' }, 
          ]
        }
      ],
      '/backgroundjob/': [
        {
          text: 'List Background Job',
          items: [
            { text: 'ExchangeRate', link: '/backgroundjob/exchangerate/' }, 
            { text: 'ImportBC30', link: '/backgroundjob/exchangerate/' }, 
            { text: 'ImportCeisa', link: '/backgroundjob/exchangerate/' }, 
            { text: 'UpdateCustomsEntry', link: '/backgroundjob/exchangerate/' }, 
            { text: 'ImportCustomsEntry', link: '/backgroundjob/exchangerate/' }, 
            { text: 'UpdateCustomsRelease', link: '/backgroundjob/exchangerate/' }, 
            { text: 'ImportCustomsRelease', link: '/backgroundjob/exchangerate/' }, 
            { text: 'ProcessQueUpload', link: '/backgroundjob/exchangerate/' },
            { text: 'SyncBcNumber', link: '/backgroundjob/syncbcnumber/' }, 
            { text: 'UploadCustomer', link: '/backgroundjob/exchangerate/' },  
          ]
        },
        {
          text: 'List Task Scheduler',
          items: [
            { text: 'ImportRR', link: '/backgroundjob/taskscheduler/importrrjob/' }, 
          ]
        }
      ],

      '/klriuip': [
        {
          text: 'Langkah Awal',
          items: [
            { text: 'Mengundang Vendor', link: '/klriuip/mengundangvendoriuip/' }, 
            { text: 'Eksternal', link: '/klriuip/usereksternal/' }, 
          ]
        },
        {
          text: 'Dokumen',
          items: [
            { text: 'Kepabeanan', link: '/klriuip/dokumenbc/' }, 
            { text: 'Internal', link: '/klriuip/dokumeninternal/' }, 
            { text: 'Eksternal', link: '/klriuip/dokumeneksternal/' }, 
          ]
        },
        {
          text: 'Integrasi',
          items: [
            { text: 'Sync Client', link: '/klriuip/syncclient/' }, 
            { text: 'PIB', link: '/klriuip/pib/' }, 
          ]
        }
      ]
    },
    footer: {
      message: 'Bea Cukai Lebih Baik',
      copyright: 'Copyright © 2022 PT Solusi Manufaktur Teknologi'
    }
  }
})

function nav() {
  return [
    
    { text: 'Dokumen Pabean', link: '/documentcustoms/', activeMatch: '/documentcustoms' },
    { text: 'Background Job', link: '/backgroundjob/', activeMatch: '/backgroundjob' },
    { text: 'Laporan Kepabeanan', link: '/klriuip/mengundangvendoriuip/', activeMatch: '/klriuip' },
    { text: 'List Masalah', link: '/legal/tos', activeMatch: '/legal/tos' },
    { text: 'Dokumen', link: '/document/', activeMatch: '/fiturumum' },
    { text: 'Fitur Umum', link: '/fiturumum/', activeMatch: '/fiturumum' }
  ]
}

