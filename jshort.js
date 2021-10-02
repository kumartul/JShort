import { get } from './src/ajax/get.js';
import { post } from './src/ajax/post.js';
import { hide, show, blink, move, grow, shrink, shrinkAndGrow, rotate } from './src/animation/animation.js';
import { attr, hasAttr, removeAttr } from './src/attribute/attribute.js';
import { hasClass, hasClasses, removeClass, removeClasses, addClass, addClasses, classes } from './src/class/class.js';
import { log, cclear, debug, cerror, cgrp, cinfo, cmem, ctbl, cwarn, ctime, ctimend, ctrc } from './src/console/console.js';
import { css } from './src/css/css.js';
import { data } from './src/data/data.js';
import { Stopwatch } from './src/delay_interval/stopwatch.js';
import { countChildren, html, text, clone, insert, empty, remove, parent, parents, siblings, prevSiblings, nextSiblings, position, scale, before, after, instantiate } from './src/dom/dom.js';
import { error } from './src/error/error.js';
import { on, off } from './src/event/events.js';
import { getData } from './src/fetch/fetch.js';
import { hasId, removeId, changeId, id } from './src/id/id.js';
import { isInt, isBool, isStr, isDecimal, isObj, isFunc, isSym, isUndefined, isNull, isArray } from './src/is_functions/is.js';
import { Video } from './src/video/video.js';

function $(selector) {     
    // If selector is empty, then throw an error  
    if(!selector) {
        throw new TypeError(`Failed to execute '$': The provided selector is empty`);
    }

    // If selector is not a string, then throw an error
    if(typeof selector !== 'string') {
        throw new TypeError(`Failed to execute: '$': The provided selector is not a string`);
    }

    const jshortObj = {
        element: document.querySelector(selector),
        $: $,
        hide: hide,
        show: show,
        blink: blink,
        move: move,
        grow: grow,
        shrink: shrink,
        shrinkAndGrow: shrinkAndGrow,
        rotate: rotate,
        attr: attr,
        hasAttr: hasAttr,
        removeAttr: removeAttr,
        hasClass: hasClass,
        hasClasses: hasClasses,
        removeClass: removeClass,
        removeClasses: removeClasses,
        addClass: addClass,
        addClasses: addClasses,
        classes: classes,
        css: css,
        data: data,
        countChildren: countChildren,
        html: html,
        text: text,
        clone: clone,
        insert: insert,
        empty: empty,
        remove: remove,
        parent: parent,
        parents: parents,
        siblings: siblings,
        prevSiblings: prevSiblings,
        nextSiblings: nextSiblings,
        position: position,
        scale: scale,
        before: before,
        after: after,
        instantiate: instantiate,
        on: on,
        off: off,
        hasId: hasId,
        removeId: removeId,
        changeId: changeId,
        id: id
    }

    return jshortObj;
}

export{
    $,
    get,
    post,
    log,
    cclear,
    debug,
    cerror,
    cgrp,
    cinfo,
    cmem,
    ctbl,
    cwarn,
    ctime,
    ctimend,
    ctrc,
    Stopwatch,
    error,
    getData,
    isInt,
    isBool,
    isStr,
    isDecimal,
    isObj,
    isFunc,
    isSym,
    isUndefined,
    isNull,
    isArray,
    Video
}