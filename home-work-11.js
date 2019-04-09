// 1(3 points)
var files = [

    {
        title: 'picture',
        ref: 'https://st2.depositphotos.com/1053646/6104/i/450/depositphotos_61040615-stock-photo-dubai-downtown-night-scene.jpg'
    },
    {
        title: 'picture',
        ref: 'https://s1.1zoom.ru/big3/559/347133-admin.jpg'
    },
    {
        title: 'picture',
        ref: 'https://avatars.mds.yandex.net/get-pdb/231404/32ea6edf-adb8-49f4-80ab-f0571f8ba6ce/orig'
    },
    {
        title: 'picture',
        ref: 'https://www.zastavki.com/pictures/originals/2014/Cities_A_city_of_skyscrapers_083208_.jpg'
    }
]
var fileJson = JSON.stringify (files)



JSON.parse (fileJson).forEach (
    function (item) {
        var elem = document.createElement ("img")
        elem.style = `width: 200px; height: 133.33px`
        elem.src = item.ref
        document.body.appendChild (elem)
    }
)

// 2(4 points)
var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? log [ key + "[2]" ] ? key + "[3]" : key + "[2]" : key
}

var log = {}

var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 7000
    )
)

messages.forEach (
    ( message, index, arr ) => sendMessage ( message )
        .then (
            mess => Object.assign ( log,
                { [ arr.getKey() ] : message }
            )
        )
)
// 3(5 points)
var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => new Date().toLocaleString().split(", ")[1]

var log = {}

var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 5000
    )
)

var sendAll = () => {
    var index = 0
    function recursive () {
        sendMessage ( messages [ index++ ] )
            .then (
                response => {
                    if ( !response ) return
                    Object.assign ( log,
                        { [ messages.getKey() ] : response }
                    )
                    recursive ()
                }
            )
    }
    recursive ()
}

sendAll()