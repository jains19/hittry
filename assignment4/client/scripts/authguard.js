"use strict";
(function () {
    let protected_routes = ["/contact-list", "/new-event", "/stats", "/edit"];
    if (protected_routes.indexOf(router.ActiveLink) > -1) {
        if (!sessionStorage.getItem("user")) {
            location.href = "/login";
        }
    }
})();
//# sourceMappingURL=authguard.js.map