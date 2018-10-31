import Api from '@/services/FDAPIs.js'

export default {
    getProgramFrames() {
      return Api().get()
    },
    getProgramFramesByFPC(fpc) {
      return Api().get(/fpc/)
    }
  }