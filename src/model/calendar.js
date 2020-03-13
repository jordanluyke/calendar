class Calendar {

    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    constructor(year, month) {
        this.date = new Date(year, month - 1, 1)
    }

    update() {
        this._setTitle()
        this._createDayElements()
    }

    clickLeft() {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1)
        this.update()
    }

    clickRight() {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1)
        this.update()
    }

    clickDay() {
        //
    }

    _setTitle() {
        let title = document.getElementById("calendar-title")
        title.innerText = this._getMonthName() + " " + this.date.getFullYear()
    }

    _getMonthName() {
        return this.monthNames[this.date.getMonth()]
    }

    _createDayElements() {
        let body = document.getElementById("days-body")
        // clear day elements
        body.innerHTML = ""

        let blankDays = this.date.getDay()
        let totalDayElements = this._getDaysInMonth() + blankDays
        for(let i = 0; i < totalDayElements; i++) {
            let element = document.createElement("div")
            element.classList = ["day"]
            if(i < blankDays) {
                element.classList.add("inactive")
            } else {
                let dayDate = i - blankDays + 1
                element.innerText = dayDate
                let day = new Date(this.date.getFullYear(), this.date.getMonth(), dayDate)
                    .getDay()
                if(this._isWeekend(day)) {
                    element.classList.add("weekend")
                }
            }
            body.appendChild(element)
        }
    }

    _getDaysInMonth() {
        return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0)
            .getDate()
    }

    _isWeekend(day) {
        return day == 0 || day == 6
    }
}