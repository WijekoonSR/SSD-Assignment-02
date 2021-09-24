import axios from 'axios';

const getAccessToken = (req, res) => {

console.log(req)

       var authCode = req.body.code;
       

        axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
            params: {
                grant_type: 'authorization_code',
                code: authCode,
                redirect_uri: process.env.LinkedIN_REDIRECT_URI,
                client_id: process.env.LinkedIN_CLIENT_ID,
                client_secret: process.env.LinkedIN_CLIENT_SECRET
            }
        }).then(result => {
            res.send(result)
        }).catch((err)=>{
            res.send(err)
        })
    
        // const formData = new FormData();
        // formData.append('grant_type', 'authorization_code');
        // formData.append('code', authCode);
        // formData.append('redirect_uri', 'http://localhost:3000/linkedin-auth');
        // formData.append('client_id', client_id);
        // formData.append('client_secret', client_secret);

        // axios.get(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${data.code}&redirect_uri=${process.env.REACT_APP_LinkedIn_CB_URL}&client_id=${process.env.REACT_APP_LinkedIn_Client_ID}&client_secret=${process.env.REACT_APP_LinkedIn_Client_SECRET}`, {
        //     headers: {
        //         'Content-type': 'application/x-www-urlenconded',
        //         'Access-Control-Allow-Origin': '*',
        //     },
        // }).then(response => {
        //     console.log(response.access_token)
        // });

}
function getLinkedinId(req) {
    return new Promise((resolve, reject) => {
        const url = 'https://api.linkedin.com/v2/me';
        const headers = {
            'Authorization': 'Bearer ' + req.session.token,
            'cache-control': 'no-cache',
            'X-Restli-Protocol-Version': '2.0.0' 
        };

        request.get({ url: url, headers: headers }, (err, response, body) => {
            if(err) {
                reject(err);
            }
            resolve(JSON.parse(body).id);
        });
    });
}

function publishContent(req, linkedinId, content) {
    const url = 'https://api.linkedin.com/v2/shares';
    const { title, text, shareUrl, shareThumbnailUrl } = content;
    const body = {
        owner: 'urn:li:person:' + linkedinId,
        subject: title,
        text: {
            text: text
        },
        content: {
            contentEntities: [{
                entityLocation: shareUrl,
                thumbnails: [{
                    resolvedUrl: shareThumbnailUrl
                }]
            }],
            title: title
        },
        distribution: {
            linkedInDistributionTarget: {}
        }
    };
    const headers = {
        'Authorization': 'Bearer ' + req.session.token,
        'cache-control': 'no-cache',
        'X-Restli-Protocol-Version': '2.0.0',
        'x-li-format': 'json'
    };

    return new Promise((resolve, reject) => {
        request.post({ url: url, json: body, headers: headers}, (err, response, body) => {
            if(err) {
                reject(err);
            }
            resolve(body);
        });
    });

}


export { getAccessToken , getLinkedinId, publishContent}