const unsupportedTypes = ['image/jpeg', 'image/bmp', 'image/gif', 'image/jpg']

const checkSupportedTypes = (filetype) => {

    
    let isSupported = true

    // for (let unsupportedType of unsupportedTypes)
    //     {
    //         console.log(unsupportedType)
    //         if (filetype === unsupportedType) {
    //             isSupported = false
    //             break
    //         }
    //     }
        
   
    return isSupported
}



export const helpers = {
    checkSupportedTypes
}