const msalConfig = {
       auth: {
        clientId: "dc7db730-b19a-4f04-9ee4-b6cc437bbdf4",
        authority: "https://login.microsoftonline.com/common/",
        redirectUri: "http://localhost:4000/auth",
        tenantId: "9417a790-2c7e-41ed-97a2-81ed87965dee",
        secretValue: 'lzR585HtVyTHM~yg.T8_7~_80e_0q449C8',
        secretKey: 'c560a094-6f86-4c8c-bcb1-f3e99bff9459'
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case msal.LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case msal.LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case msal.LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case msal.LogLevel.Warning:		
                        console.warn(message);		
                        return;		
                    default:
                        console.warn(message);		
                        return;		
                }	
            }	
        }	
    }
};