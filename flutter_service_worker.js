'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "95237db31acc26cd253961bbf83807f6",
"assets/assets/images/3.jpg": "bfe8a5095716dcc0254e76450296d28c",
"assets/assets/images/m.png": "ed014a68f470c48d524db70b40fd5fd7",
"assets/assets/images/placeholder.png": "0c12d2fd4673dee91a743aecb340d6e6",
"assets/assets/images/w.png": "7ebc1eb85034baea86536924226d6663",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "591269e3de3a884da8fed6d7c2a8ffe0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"Control-Panel-web/.git/COMMIT_EDITMSG": "606ad6044d620c90b262ecb4e9b41887",
"Control-Panel-web/.git/config": "4ea051b9612024d47b7037f8d28f9c1b",
"Control-Panel-web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Control-Panel-web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Control-Panel-web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Control-Panel-web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Control-Panel-web/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"Control-Panel-web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Control-Panel-web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Control-Panel-web/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"Control-Panel-web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Control-Panel-web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Control-Panel-web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Control-Panel-web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Control-Panel-web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Control-Panel-web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Control-Panel-web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Control-Panel-web/.git/index": "13e1632c61b51188ed7809ebe0cfe519",
"Control-Panel-web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Control-Panel-web/.git/logs/HEAD": "1073d164541b6410f51ee7035fc0d1c1",
"Control-Panel-web/.git/logs/refs/heads/main": "00f37b32351ecb1bbb49c08c29d81d8f",
"Control-Panel-web/.git/logs/refs/remotes/origin/main": "165311c4ef21d73ca38afdf1c034aae0",
"Control-Panel-web/.git/objects/07/c650e39f31d226ccb0237d4e68a2dc0159dac9": "7c3704a5843b6ea6ffcaa5dde8e107f5",
"Control-Panel-web/.git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
"Control-Panel-web/.git/objects/14/c364084eb4d80289e0b525f38c22ac379ecd30": "2027db9230fc00c8812e80494b23a5e1",
"Control-Panel-web/.git/objects/20/36d1d759b5ff5233604cc323e03ce64b94d2fd": "87ac968e96cc5031d1de7fb7bc8198dd",
"Control-Panel-web/.git/objects/21/5946d2e8755aef90339a8f077430be5368f114": "356afc8f06c60ae80edf253ece59a74a",
"Control-Panel-web/.git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
"Control-Panel-web/.git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
"Control-Panel-web/.git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
"Control-Panel-web/.git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
"Control-Panel-web/.git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
"Control-Panel-web/.git/objects/33/a710b973dd3f75cba0ac4d7e2a1c5ce668af02": "84494ee493aa3911d3662401c577091f",
"Control-Panel-web/.git/objects/3c/796666755dd8fa12a9642403a1f215768a1770": "08412c1f756868ede8408a66c7c31b17",
"Control-Panel-web/.git/objects/3e/4117a6fe3bc7b0cbd29af6cf68a6c11fe9bc7b": "a3f74e5dc75160a46a7342451707f0ea",
"Control-Panel-web/.git/objects/44/79590402cdf4b7b5042949bee91f7ceec0dfaf": "a504fbc0ca3c894cc5a1afa4ca320710",
"Control-Panel-web/.git/objects/46/7e6d7dc6957490db072fd338dfc297e60be4cb": "ea5df89103fbe2faa59c52a0a820b3e2",
"Control-Panel-web/.git/objects/4a/33981cfe9b7741c919508a00c51811d560efa8": "bb0d51becff7c42eb4e75f4415d8679e",
"Control-Panel-web/.git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
"Control-Panel-web/.git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
"Control-Panel-web/.git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
"Control-Panel-web/.git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
"Control-Panel-web/.git/objects/71/4aa655f575cfe871611596eed17f58fba4b854": "3891786b1ba1cd3db026f4bb4a450cca",
"Control-Panel-web/.git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
"Control-Panel-web/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"Control-Panel-web/.git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
"Control-Panel-web/.git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
"Control-Panel-web/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"Control-Panel-web/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"Control-Panel-web/.git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
"Control-Panel-web/.git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
"Control-Panel-web/.git/objects/9d/946052767b5ad338a8c09c9fd3b1c09fc1fff4": "5be58e612a0014825aa701aecbebbf1c",
"Control-Panel-web/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"Control-Panel-web/.git/objects/a4/b38f7bde78ec829a2f6f91f9e85edb73aebcf9": "da8ce87b21ed5770c00b35c7190ec210",
"Control-Panel-web/.git/objects/a7/c5767bef48a48bf4b319fd8fea1a3cd7c636fd": "e2804e2b49c3711523baa1634d88914f",
"Control-Panel-web/.git/objects/b2/af13dc136f22719a558b79fbd1f624c713ea85": "ba122fbb3abddae173d31faac774e0aa",
"Control-Panel-web/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"Control-Panel-web/.git/objects/b7/f841774d66b462b3a6699de732948a7acb872a": "8a257b8d2c8fbb1bab3944fa57a238ee",
"Control-Panel-web/.git/objects/b8/c4467dcfc03a8220c16acb868a42371e1977e3": "c5077ba17f85964eeff6d5108364e80a",
"Control-Panel-web/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"Control-Panel-web/.git/objects/b9/7daa56a0fa321c11f23f0a8bf8ef7180c7de88": "34a802c2efd8c713bd15fb3502f6dd78",
"Control-Panel-web/.git/objects/c0/d72669b2c5bbda40d5917c79fae3cf4ae1ffe9": "c5680cff709d7d155bde870aa03b07e2",
"Control-Panel-web/.git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
"Control-Panel-web/.git/objects/c4/629bebf8eae335bbe08270658512410ec5bafa": "e63e96ec312c05c3349e38055d080b27",
"Control-Panel-web/.git/objects/c5/f8592ce786368e699483cdeee1e5d35d4460ae": "639a53f620ed6cb97addc1aa476b0911",
"Control-Panel-web/.git/objects/cb/8266224595b8d32f72a76a3a6a4977d9140252": "0ad8c6ef4ed5c7a6ae5053576f9e121e",
"Control-Panel-web/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"Control-Panel-web/.git/objects/d7/6a51b75c20daae177b33d4027310d4f26efff4": "ace0129289044dc87876db5fcc0d7236",
"Control-Panel-web/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"Control-Panel-web/.git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
"Control-Panel-web/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"Control-Panel-web/.git/objects/f8/136b3c76ca0cfeb51203f4e2b9e86975d7b704": "6930821bd9e7868c9ff9364abe0e5ac6",
"Control-Panel-web/.git/refs/heads/main": "dc3bdfed18fe8377f8f8286ad7f1c72b",
"Control-Panel-web/.git/refs/remotes/origin/main": "dc3bdfed18fe8377f8f8286ad7f1c72b",
"Control-Panel-web/assets/AssetManifest.json": "95237db31acc26cd253961bbf83807f6",
"Control-Panel-web/assets/assets/images/3.jpg": "bfe8a5095716dcc0254e76450296d28c",
"Control-Panel-web/assets/assets/images/m.png": "ed014a68f470c48d524db70b40fd5fd7",
"Control-Panel-web/assets/assets/images/placeholder.png": "0c12d2fd4673dee91a743aecb340d6e6",
"Control-Panel-web/assets/assets/images/w.png": "7ebc1eb85034baea86536924226d6663",
"Control-Panel-web/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"Control-Panel-web/assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"Control-Panel-web/assets/NOTICES": "591269e3de3a884da8fed6d7c2a8ffe0",
"Control-Panel-web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"Control-Panel-web/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"Control-Panel-web/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"Control-Panel-web/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"Control-Panel-web/canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"Control-Panel-web/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"Control-Panel-web/canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"Control-Panel-web/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"Control-Panel-web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Control-Panel-web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Control-Panel-web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Control-Panel-web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Control-Panel-web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"Control-Panel-web/index.html": "603993dbc34a7adc9228b83f997f65b7",
"/": "a3ddc14983b5f37dd9e8c792d970cb10",
"Control-Panel-web/last_build_run.json": "d81b60490e550d13d5643dc672178fb2",
"Control-Panel-web/main.dart.js": "d00c060d5bdd96bf8709087fae4280c6",
"Control-Panel-web/manifest.json": "2ea0ca30323f3e4ce986f920ae90a26a",
"Control-Panel-web/README.md": "411ea07f5cdc1600ae243b621e4243c1",
"Control-Panel-web/version.json": "9794cc1644bf1f0d77c884688e89e24d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a3ddc14983b5f37dd9e8c792d970cb10",
"main.dart.js": "d00c060d5bdd96bf8709087fae4280c6",
"manifest.json": "2ea0ca30323f3e4ce986f920ae90a26a",
"version.json": "9794cc1644bf1f0d77c884688e89e24d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
