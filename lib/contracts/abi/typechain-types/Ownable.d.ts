import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface OwnableInterface extends utils.Interface {
    contractName: "Ownable";
    functions: {
        "renounceManagement()": FunctionFragment;
        "pushManagement(address)": FunctionFragment;
        "manager()": FunctionFragment;
        "pullManagement()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "renounceManagement", values?: undefined): string;
    encodeFunctionData(functionFragment: "pushManagement", values: [string]): string;
    encodeFunctionData(functionFragment: "manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "pullManagement", values?: undefined): string;
    decodeFunctionResult(functionFragment: "renounceManagement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pushManagement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pullManagement", data: BytesLike): Result;
    events: {
        "OwnershipPushed(address,address)": EventFragment;
        "OwnershipPulled(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipPushed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipPulled"): EventFragment;
}
export declare type OwnershipPushedEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipPushedEventFilter = TypedEventFilter<OwnershipPushedEvent>;
export declare type OwnershipPulledEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipPulledEventFilter = TypedEventFilter<OwnershipPulledEvent>;
export interface Ownable extends BaseContract {
    contractName: "Ownable";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OwnableInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        renounceManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pushManagement(newOwner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        manager(overrides?: CallOverrides): Promise<[string]>;
        pullManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    renounceManagement(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pushManagement(newOwner_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    manager(overrides?: CallOverrides): Promise<string>;
    pullManagement(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        renounceManagement(overrides?: CallOverrides): Promise<void>;
        pushManagement(newOwner_: string, overrides?: CallOverrides): Promise<void>;
        manager(overrides?: CallOverrides): Promise<string>;
        pullManagement(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipPushed(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipPushedEventFilter;
        OwnershipPushed(previousOwner?: string | null, newOwner?: string | null): OwnershipPushedEventFilter;
        "OwnershipPulled(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipPulledEventFilter;
        OwnershipPulled(previousOwner?: string | null, newOwner?: string | null): OwnershipPulledEventFilter;
    };
    estimateGas: {
        renounceManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pushManagement(newOwner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        manager(overrides?: CallOverrides): Promise<BigNumber>;
        pullManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        renounceManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pushManagement(newOwner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pullManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Ownable.d.ts.map