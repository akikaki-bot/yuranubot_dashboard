
export type SnowFlakeConstructor = string | number | bigint;

export class SnowFlake {

    private value : string;

    constructor( value : SnowFlakeConstructor ){
        this.value = value.toString();
    }

    /**
     * Converts the SnowFlake to a string
     * @returns {string}
     */
    public toString(){
        return this.value;
    }

    /**
     * @deprecated
     * 
     * Converts the SnowFlake value to a number.
     * 
     * @warning
     * This convert util function will make a some difference between the original value and the converted value.
     * @returns {number}
     */
    public toNumber(){
        return parseInt(this.value);
    }

    /**
     * Converts the SnowFlake value to a BigInt.
     * This function is recommended to use when you want to use the SnowFlake value as a BigInt.
     * @returns {bigint}
     */
    public toBigInt(){
        return BigInt(this.value);
    }
}