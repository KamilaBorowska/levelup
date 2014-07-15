"use strict"

window.onload = function onload() {
    var table = document.createElement('table')
    table.setAttribute('border', 1)
    function appendRow(name, callback, type) {
        if (!type) type = 'td'
        var tr = document.createElement('tr')
        var th = document.createElement('th')
        th.appendChild(document.createTextNode(name))
        tr.appendChild(th)
        var i
        var length = movesets.length
        for (i = 0; i < length; i++) {
            var td = document.createElement(type)
            td.appendChild(document.createTextNode(callback(movesets[i])))
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    appendRow('', function names(mon) {
        return mon.name + ' (' + mon.level + ')'
    }, 'th')

    var i
    for (i = 0; i < 4; i++) {
        appendRow('Move ' + (i + 1), function move(mon) {
            return mon.moves[i]
        })
    }

    var maxLevel = 0
    var length = movesets.length
    for (i = 0; i < length; i++) {
        var moveLevel
        for (moveLevel in movesets[i].levelup) {
            maxLevel = Math.max(maxLevel, moveLevel - movesets[i].level)
        }
    }

    for (i = 1; i <= maxLevel; i++) {
        appendRow('+' + i, function levelUpMove(mon) {
            return mon.levelup[mon.level + i] || ""
        })
    }

    document.body.appendChild(table)
}
