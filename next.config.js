module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/activation/:id': ({id}) => ({ page: '/activation', query: {id} }),
      }
    }
  }