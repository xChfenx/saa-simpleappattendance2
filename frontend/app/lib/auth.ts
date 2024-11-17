import bcrypt from "bcryptjs";

export function getHashedText(textToHash:string) : string{
    
    return bcrypt.hashSync(textToHash, createSalt());
}

export function createSalt() : string{
    return bcrypt.genSaltSync();
}

export function matchHashes(text:string, hash:string) : boolean {
    return bcrypt.compareSync(text, hash);
}