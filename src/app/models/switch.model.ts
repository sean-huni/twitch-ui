export class Switch {
    private status: String;

    get getStatus(): String {
        return this.status;
    }

    set setStatus(value: String) {
        this.status = value;
    }
}
