const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot333w4/",
            name: "springboot333w4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot333w4/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "伊吗图镇乡村农产品销售系统"
        } 
    }
}
export default base
