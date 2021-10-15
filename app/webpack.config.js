module.exports={
  devServer: {
   contentBase: DIST_FOLDER,
   port: 3000,
   // Send API requests on localhost to API server get around CORS.
   proxy: {
      '/api': {
         target: {
            host: "0.0.0.0",
            protocol: 'http:',
            port: 8080
         },
         pathRewrite: {
            '^/api': ''
         }
      }
   }
}
}
