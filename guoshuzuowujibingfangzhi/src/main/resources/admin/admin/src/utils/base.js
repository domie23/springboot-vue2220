const base = {
    get() {
        return {
            url : "http://localhost:8080/guoshuzuowujibingfangzhi/",
            name: "guoshuzuowujibingfangzhi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/guoshuzuowujibingfangzhi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "果蔬作物疾病防治系统"
        } 
    }
}
export default base
