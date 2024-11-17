import bcrypt from "bcryptjs";

export function getHashedPassword(passwordtoHash:string) : string{
    
    return bcrypt.hashSync(passwordtoHash, createSalt());
}

export function createSalt() : string{
    return bcrypt.genSaltSync();
}

export function matchHashes(text:string, hash:string) : boolean {
    return bcrypt.compareSync(text, hash);
}