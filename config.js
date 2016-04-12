var i = 0,
    batchCount = 16;


module.exports = {
    settings: {
        concurrency: 4,  // -c
        max_requests: 200,  // -n
        output_format: 'text' // -o 'text' or 'json'
    },
    targets: {
        epg: {
            auth: 'pcc:media',
            host: '10.43.1.33',
            port: 8080,
            // path: '/plsq/pcc.scrs2?search=&pos=1&cnt=16',
            pathFn: function() {
                return '/plsq/pcc.scrs2?search=&pos=' + ((i++) * batchCount + 1) + '&cnt=' + batchCount; 
            } 
        },
        qrest: {
            host: 'localhost',
            port: 8081,
            path: '/rest/pcc/scrs?search=&pos=1&cnt=16',
        }
    }
};
