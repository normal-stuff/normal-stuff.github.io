var _0x325b = ['removeChild', 'load', 'addEventListener', 'body', 'appendChild', '_CCSettings', 'rawAssets', 'assetTypes', 'number', 'view', 'resizeWithBrowserSize', 'orientation', 'landscape', 'setOrientation', 'macro', 'ORIENTATION_LANDSCAPE', 'portrait', 'ORIENTATION_PORTRAIT', 'enableAutoFullScreen', 'sys', 'browserType', 'BROWSER_TYPE_BAIDU', 'BROWSER_TYPE_MOBILE_QQ', 'AssetLibrary', 'init', 'gameContentBasePath', 'res/import', 'res/raw-', 'packedAssets', 'launchScene', 'runtime', 'director', 'setRuntimeLaunchScene', 'loadScene', 'isBrowser', 'getElementById', 'GameCanvas', 'style', 'GameDiv', 'backgroundImage', 'jsList', 'project.js', 'push', 'map', 'platformSrcDir', '?cbid=', 'getCBID', 'scenes', 'debug', 'INFO', 'DebugMode', 'ERROR', 'groupList', 'collisionMatrix', 'run', 'document', 'createElement', 'script', 'async', 'src', 'cocos2d-js.js', 'cocos2d-js-min.js'];
(function (_0x5d8793, _0x38e855) {
    var _0x34e4b9 = function (_0x43248e) {
        while (--_0x43248e) {
            _0x5d8793['push'](_0x5d8793['shift']());
        }
    };
    _0x34e4b9(++_0x38e855);
}(_0x325b, 0xbf));
var _0x4546 = function (_0x5cdd40, _0x377b59) {
    _0x5cdd40 = _0x5cdd40 - 0x0;
    var _0x5d67b4 = _0x325b[_0x5cdd40];
    return _0x5d67b4;
};
(function () {
    'use strict';

    function _0x11f146() {
        var _0x255754 = window[_0x4546('0x0')];
        window['_CCSettings'] = undefined;
        if (!_0x255754['debug']) {
            var _0x36b957 = _0x255754[_0x4546('0x1')];
            var _0x22c25f = _0x255754[_0x4546('0x2')];
            for (var _0x4698fb in _0x36b957) {
                var _0x44e7dc = _0x36b957[_0x4698fb];
                for (var _0x2953e5 in _0x44e7dc) {
                    var _0xbe8c69 = _0x44e7dc[_0x2953e5];
                    var _0x56c71e = _0xbe8c69[0x1];
                    if (typeof _0x56c71e === _0x4546('0x3')) {
                        _0xbe8c69[0x1] = _0x22c25f[_0x56c71e];
                    }
                }
            }
        }
        var _0x36eac0 = function () {
            cc[_0x4546('0x4')][_0x4546('0x5')](!![]);
            if (cc['sys']['isMobile']) {
                if (_0x255754[_0x4546('0x6')] === _0x4546('0x7')) {
                    cc[_0x4546('0x4')][_0x4546('0x8')](cc[_0x4546('0x9')][_0x4546('0xa')]);
                } else if (_0x255754['orientation'] === _0x4546('0xb')) {
                    cc['view'][_0x4546('0x8')](cc[_0x4546('0x9')][_0x4546('0xc')]);
                }
                cc['view'][_0x4546('0xd')](cc[_0x4546('0xe')][_0x4546('0xf')] !== cc[_0x4546('0xe')][_0x4546('0x10')] && cc[_0x4546('0xe')]['browserType'] !== cc[_0x4546('0xe')]['BROWSER_TYPE_WECHAT'] && cc['sys'][_0x4546('0xf')] !== cc[_0x4546('0xe')][_0x4546('0x11')]);
            }
            cc[_0x4546('0x12')][_0x4546('0x13')]({
                'libraryPath': window[_0x4546('0x14')] + _0x4546('0x15'),
                'rawAssetsBase': window['gameContentBasePath'] + _0x4546('0x16'),
                'rawAssets': _0x255754[_0x4546('0x1')],
                'packedAssets': _0x255754[_0x4546('0x17')]
            });
            var _0x55608a = _0x255754[_0x4546('0x18')];
            if (cc[_0x4546('0x19')]) {
                cc[_0x4546('0x1a')][_0x4546('0x1b')](_0x55608a);
            }
            cc[_0x4546('0x1a')][_0x4546('0x1c')](_0x55608a, null, function () {
                if (cc[_0x4546('0xe')][_0x4546('0x1d')]) {
                    var _0x3960f6 = document[_0x4546('0x1e')](_0x4546('0x1f'));
                    _0x3960f6[_0x4546('0x20')]['visibility'] = '';
                    var _0x4cae87 = document[_0x4546('0x1e')](_0x4546('0x21'));
                    if (_0x4cae87) {
                        _0x4cae87[_0x4546('0x20')][_0x4546('0x22')] = '';
                    }
                }
            });
        };
        var _0x403724 = _0x255754[_0x4546('0x23')];
        var _0x5f089d = _0x255754['debug'] ? 'project.dev.js' : _0x4546('0x24');
        if (_0x403724) {
            _0x403724[_0x4546('0x25')](_0x5f089d);
        } else {
            _0x403724 = [_0x5f089d];
        }
        _0x403724 = _0x403724[_0x4546('0x26')](function (_0x163afd) {
            return window[_0x4546('0x27')] + _0x163afd + _0x4546('0x28') + window[_0x4546('0x29')]();
        });
        var _0x277672 = {
            'id': _0x4546('0x1f'),
            'scenes': _0x255754[_0x4546('0x2a')],
            'debugMode': _0x255754[_0x4546('0x2b')] ? cc['DebugMode'][_0x4546('0x2c')] : cc[_0x4546('0x2d')][_0x4546('0x2e')],
            'showFPS': _0x255754['debug'],
            'frameRate': 0x3c,
            'jsList': _0x403724,
            'groupList': _0x255754[_0x4546('0x2f')],
            'collisionMatrix': _0x255754[_0x4546('0x30')],
            'renderMode': 0x0
        };
        cc['game'][_0x4546('0x31')](_0x277672, _0x36eac0);
    }

    if (window[_0x4546('0x32')]) {
        var _0x1a1704 = document[_0x4546('0x33')](_0x4546('0x34'));
        _0x1a1704[_0x4546('0x35')] = !![];
        _0x1a1704[_0x4546('0x36')] = window[_0x4546('0x27')] + (window[_0x4546('0x0')][_0x4546('0x2b')] ? _0x4546('0x37') : _0x4546('0x38')) + _0x4546('0x28') + window[_0x4546('0x29')]();
        var _0x5c4296 = function () {
            document['body'][_0x4546('0x39')](_0x1a1704);
            _0x1a1704['removeEventListener'](_0x4546('0x3a'), _0x5c4296, ![]);
            _0x11f146();
        };
        _0x1a1704[_0x4546('0x3b')](_0x4546('0x3a'), _0x5c4296, ![]);
        document[_0x4546('0x3c')][_0x4546('0x3d')](_0x1a1704);
    }
}());