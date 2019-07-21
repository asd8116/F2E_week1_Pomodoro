module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/F2E_week1_Pomodoro/dist/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/all.scss";`
      }
    }
  }
};
