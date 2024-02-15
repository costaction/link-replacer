document.addEventListener("DOMContentLoaded", function() {
    const sourceDomains = [ 'mirror2fd1.local.dev.golastik.com', 'fd1.local.dev.golastik.com' ];
    const targetDomain = 'short1fd1.local.dev.golastik.com';

    for(let i = 0; i < document.links.length; i++) {
        let hostname = document.links[i].hostname.replace(/^www\./, '');

        if (sourceDomains.includes(hostname)) {
            document.links[i].hostname = targetDomain;
        }
    }
});
