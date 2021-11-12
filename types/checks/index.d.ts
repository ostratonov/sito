import {CheckDto, ValidationParams} from "../interfaces";
import Check from "./check";
import {ValidationError} from "../errors";

declare class Checks {
    // @ts-ignore
    extra: Map<any, any>

    execute(params: ValidationParams): Promise<ValidationError | never>

    add(checkDto: CheckDto): void

    last(): Check

    values(): Check[]
}

export default Checks