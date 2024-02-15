document.addEventListener("DOMContentLoaded", function() {
    const sourceDomains = [ 'turbobit.cc', 'turbobit.website', 'turbo-bit.website', 'turbobit1.com', 'turbobits.net', 'turbobyte.net', 'turbobit2.pw', 'turbo2bit.com', 'turbobit5.net', 'turbobi.pw', 'turbobitt.net', '2turbobit.net', 'trubobit.com', 'turboobit.com', 'turbobbt.net', 'turbosit.net', 'turbobiet.com', 'turboblt.com', 'turbobiyt.net', 'turbobif.com', 'turbobite.net', 'tourbobit.com', 'turbobitn.com', 'turbobyt.net', 'tuerbobit.net', 'turbobeet.net', 'turbobiit.net', 'turbodit.net', 'tourbobit.net', 'turbobitt.com', 'turbobits.cc', 'turbobite.me', 'turbobit.net' ];
    const targetDomain = 'tbit.to';

    for(let i = 0; i < document.links.length; i++) {
        let hostname = document.links[i].hostname.replace(/^www\./, '');

        if (sourceDomains.includes(hostname)) {
            document.links[i].hostname = targetDomain;
        }
    }
});
