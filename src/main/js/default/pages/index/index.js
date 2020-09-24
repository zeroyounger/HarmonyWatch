import router from "@system.router"

var time = 0;
var type = null;

export default {
    data: {
        picker1range: ["1", "2", "3"],
        pikcer2range: ["较慢", "舒服", "较快"]
    },
    clickAction() {
        console.log("主页被点击了...");
        router.replace({
            uri: "pages/countDown/countDown",
            params: {
                "time": time,
                "type": type
            }
        });
    },
    pvChange1(pv) {
        console.log("左边选中:" + pv.newValue); /*这里注意，是newValue  注释的快捷键是shift+l*/
        time = pv.newValue;   //这里不能够使用this.time，否则会出错
    },
    pvChange2(pv) {
        console.log("右边选中:" + pv.newValue);
        type = pv.newValue;   //这里不能够使用this.type，否则会出错
    }
}
