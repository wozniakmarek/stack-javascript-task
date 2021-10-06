// Your implementation goes here
function Stack(...args) {
    const arr = [...args]
    this.size = arr.length;
    this.push = function (arg) {
        arr.push(arg)
        this.size++;
    }
    this.isEmpty = function () {
        if (arr.length > 0) {
            return false
        } else {
            return true
        }
    }
    this.pop = function () {
        if (arr.length > 0) {
            this.size--;
            return arr.pop();
        } else {
            return null
        }
    }
    this.peek = function () {
        return arr[arr.length - 1];
    }
    this.swap = function () {
        [arr[arr.length - 1], arr[arr.length - 2]] = [arr[arr.length - 2], arr[arr.length - 1]]
    }
}

module.exports = Stack;