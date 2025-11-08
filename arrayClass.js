export default class typeArray {
    val = []
    type = ''

    constructor(array, type) {
        this.val = array
        this.type = type

        this.isCorrectTypesInArray()
    }

    isCorrectTypesInArray() {
        for (let i = 0; i < this.val.length; i++) {
            this.isCorrectTypeChecker(this.val[i], this.type);
        }
    }

    isCorrectTypeChecker(element, ty) {
        if (typeof element === ty) {
            return true
        } else {
            throw new TypeError('Inccorrect type ' + typeof element +
                ', expected ' + ty)
        }
    }

    add_e(element) {
        this.isCorrectTypeChecker(element, this.type)
        this.val.push(element)
    }

    change_e(element, value, safe_error) {
        this.isCorrectTypeChecker(value, this.type)
        if (this.val.includes(element)) {
            this.val[this.val.indexOf(element)] = value
        } else {
            if (safe_error) {
                return -1
            } else {
                throw new Error('You are trying to change element ' + element + ' which is not exist in array')
            }
        }
    }

    delete_e(element, safe_error) {
        if (this.val.includes(element)) {
            this.val.splice(this.val.indexOf(element), 1)
        } else {
            if (safe_error) {
                return -1
            } else {
                throw new Error('You are trying to delete element ' + element + ' which is not exist in array')
            }
        }
    }

    val_i(index) {
        try {
            let otpt = this.val[index]
            if (otpt === undefined) {
                throw new Error(`Value index ${index} not found`)
            } else {
                return otpt
            }

        } catch (e) {
            return -1
        }
    }
}

module.exports = typeArray
