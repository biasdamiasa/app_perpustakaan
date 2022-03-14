import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

//siswa
import IndexSiswa from '../components/siswa/Index.vue'
import TambahSiswa from '../components/siswa/Tambah.vue'
import EditSiswa from '../components/siswa/Edit.vue'
import DetailSiswa from '../components/siswa/Detail.vue'

//buku
import IndexBuku from '../components/buku/Index.vue'
import TambahBuku from '../components/buku/Tambah.vue'
import EditBuku from '../components/buku/Edit.vue'
import DetailBuku from '../components/buku/Detail.vue'

//pinjam
import IndexPinjam from '../components/transaksi/peminjaman/Index.vue'
import TambahPinjam from '../components/transaksi/peminjaman/TambahPinjam.vue'
import EditPinjam from '../components/transaksi/peminjaman/Edit.vue'
import DetailPinjam from '../components/transaksi/peminjaman/Detail.vue'
import TambahDetail from '../components/transaksi/peminjaman/TambahDetail.vue'

//kembali
import IndexKembali from '../components/transaksi/pengembalian/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/siswa',
    name: 'IndexSiswa',
    component: IndexSiswa,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/siswa/tambah',
    name: 'TambahSiswa',
    component: TambahSiswa,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/siswa/edit/:id',
    name: 'EditSiswa',
    component: EditSiswa,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/siswa/detail/:id',
    name: 'DetailSiswa',
    component: DetailSiswa,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/buku',
    name: 'IndexBuku',
    component: IndexBuku,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/buku/tambah',
    name: 'TambahBuku',
    component: TambahBuku,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/buku/edit/:id',
    name: 'EditBuku',
    component: EditBuku,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/buku/detail/:id',
    name: 'DetailBuku',
    component: DetailBuku,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/pinjam',
    name: 'IndexPinjam',
    component: IndexPinjam,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/pinjam/tambah',
    name: 'TambahPinjam',
    component: TambahPinjam,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/pinjam/edit/:id',
    name: 'EditPinjam',
    component: EditPinjam,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/pinjam/detail/:id',
    name: 'DetailPinjam',
    component: DetailPinjam,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/pinjam/detail/tambah/:id',
    name: 'TambahDetail',
    component: TambahDetail,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/kembali',
    name: 'IndexKembali',
    component: IndexKembali,
    meta : {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
      if(localStorage.getItem('auth')) {
        next()      
      } else {
        next('/login')
      }
  }
  next()
})

export default router
