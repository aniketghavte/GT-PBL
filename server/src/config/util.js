
module.exports={
    slugify: function (string) {
        const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
        const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
        const p = new RegExp(a.split('').join('|'), 'g')
    
        return string.toString().toLowerCase()
          .replace(/\s+/g, '-') 
          .replace(p, c => b.charAt(a.indexOf(c))) 
          .replace(/&/g, '-and-') 
          .replace(/[^\w\-]+/g, '') 
          .replace(/\-\-+/g, '-') 
          .replace(/^-+/, '') 
          .replace(/-+$/, '') 
      }
}