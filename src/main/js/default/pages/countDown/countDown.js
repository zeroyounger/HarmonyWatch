import router from '@system.router'

var counter = 3;

var timer = null;

var pv1 = null;
var pv2 = null;

export default {
    data: {
        imgsrc: "",
        seconds: ""
    },
    run() {
        counter = counter - 1;
        if (counter != 0) {
            this.imgsrc = "/pages/image/" + counter.toString() + ".png";
            this.seconds = counter.toString();
        } else {
            this.imgsrc = "";
            this.seconds = "";

            clearInterval(timer);
            timer = null;

            router.replace({
                uri: 'pages/pratice/pratice',
                params: {"type": this.type, "time": this.time}
            });
        }
    },
    onInit() {
        pv1 = this.data1;
        pv2 = this.data2;

        this.imgsrc = "/pages/image/" + counter.toString() + ".png";
        this.seconds = counter.toString();
    },
    onShow() {
        timer = setInterval(this.run, 1000);
    }
}
