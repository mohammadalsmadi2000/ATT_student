export function AppStore() {
  return {
    id: "",
    name: "",
    number: "",
    qrCode: "",
    version: "",
    uid: "",
    lecture: "",
    scan:0,
    addNumberAndName(num, name, uid,scan) {
      this.name = name;
      this.number = num;
      this.uid = uid;
      this.scan=scan;
    },
    addLecture(lecture) {
      this.lecture = lecture;
    },
    add(qrCode1) {
      this.qrCode = qrCode1;
    },
    addVersion(v) {
      this.version = v;
    },
  };
}
