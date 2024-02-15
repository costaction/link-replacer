document.addEventListener("DOMContentLoaded", function() {
    const sourceDomains = [ 'mirror2fd1.local.dev.golastik.com', 'fd1.local.dev.golastik.com' ];
    const targetDomain = 'short1fd1.local.dev.golastik.com';

    for(let i = 0; i < document.links.length; i++) {
        let params = new URLSearchParams(document.links[i].search);
        let internalUrl = params.get('url');

        if(internalUrl==null) {
            continue;
        }
        try {
            internalUrl = atob(internalUrl);
        } catch(e) {
            continue;
        }

        if(internalUrl) {
            if (!internalUrl.includes('://')) {
                internalUrl = 'https://' + internalUrl;
            }

            let urlObject = new URL(internalUrl);
            let hostname = urlObject.hostname.replace(/^www\./, '');

            if (sourceDomains.includes(hostname)) {
                urlObject.hostname = targetDomain;
                params.set('url', btoa(urlObject.toString()));
                document.links[i].search = params.toString();
            }
        }
    }
});
