import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KIP37TokenInterface extends utils.Interface {
    contractName: "KIP37Token";
    functions: {
        "paused(uint256)": FunctionFragment;
        "balanceOf(address,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "uri(uint256)": FunctionFragment;
        "pause(uint256)": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "unpause()": FunctionFragment;
        "isPauser(address)": FunctionFragment;
        "create(uint256,uint256,string)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "burnBatch(address,uint256[],uint256[])": FunctionFragment;
        "renouncePauser()": FunctionFragment;
        "addPauser(address)": FunctionFragment;
        "mint(uint256,address,uint256)": FunctionFragment;
        "addMinter(address)": FunctionFragment;
        "renounceMinter()": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "isMinter(address)": FunctionFragment;
        "totalSupply(uint256)": FunctionFragment;
        "creators(uint256)": FunctionFragment;
        "mintBatch(address,uint256[],uint256[])": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "burn(address,uint256,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "paused", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pause", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
    encodeFunctionData(functionFragment: "create", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "burnBatch", values: [string, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "renouncePauser", values?: undefined): string;
    encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceMinter", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "isMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "totalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "creators", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintBatch", values: [string, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "burn", values: [string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renouncePauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creators", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    events: {
        "MinterAdded(address)": EventFragment;
        "MinterRemoved(address)": EventFragment;
        "Paused(uint256,address)": EventFragment;
        "Unpaused(uint256,address)": EventFragment;
        "PauserAdded(address)": EventFragment;
        "PauserRemoved(address)": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "URI(string,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MinterAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}
export declare type MinterAddedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type MinterAddedEventFilter = TypedEventFilter<MinterAddedEvent>;
export declare type MinterRemovedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type MinterRemovedEventFilter = TypedEventFilter<MinterRemovedEvent>;
export declare type Paused_uint256_address_Event = TypedEvent<[
    BigNumber,
    string
], {
    tokenId: BigNumber;
    account: string;
}>;
export declare type Paused_uint256_address_EventFilter = TypedEventFilter<Paused_uint256_address_Event>;
export declare type Paused_address_Event = TypedEvent<[string], {
    account: string;
}>;
export declare type Paused_address_EventFilter = TypedEventFilter<Paused_address_Event>;
export declare type Unpaused_uint256_address_Event = TypedEvent<[
    BigNumber,
    string
], {
    tokenId: BigNumber;
    account: string;
}>;
export declare type Unpaused_uint256_address_EventFilter = TypedEventFilter<Unpaused_uint256_address_Event>;
export declare type Unpaused_address_Event = TypedEvent<[string], {
    account: string;
}>;
export declare type Unpaused_address_EventFilter = TypedEventFilter<Unpaused_address_Event>;
export declare type PauserAddedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PauserAddedEventFilter = TypedEventFilter<PauserAddedEvent>;
export declare type PauserRemovedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PauserRemovedEventFilter = TypedEventFilter<PauserRemovedEvent>;
export declare type TransferSingleEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}>;
export declare type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;
export declare type TransferBatchEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber[],
    BigNumber[]
], {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}>;
export declare type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], {
    account: string;
    operator: string;
    approved: boolean;
}>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export declare type URIEvent = TypedEvent<[
    string,
    BigNumber
], {
    value: string;
    id: BigNumber;
}>;
export declare type URIEventFilter = TypedEventFilter<URIEvent>;
export interface KIP37Token extends BaseContract {
    contractName: "KIP37Token";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KIP37TokenInterface;
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
        "paused(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        "paused()"(overrides?: CallOverrides): Promise<[boolean]>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "pause(uint256)"(_id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "pause()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unpause()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unpause(uint256)"(_id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        create(_id: BigNumberish, _initialSupply: BigNumberish, _uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        burnBatch(account: string, ids: BigNumberish[], values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "mint(uint256,address,uint256)"(_id: BigNumberish, _to: string, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "mint(uint256,address[],uint256[])"(_id: BigNumberish, _toList: string[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isMinter(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        totalSupply(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        creators(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        mintBatch(_to: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burn(account: string, id: BigNumberish, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    "paused(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    "paused()"(overrides?: CallOverrides): Promise<boolean>;
    balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "pause(uint256)"(_id: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "pause()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unpause()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unpause(uint256)"(_id: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;
    create(_id: BigNumberish, _initialSupply: BigNumberish, _uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    burnBatch(account: string, ids: BigNumberish[], values: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renouncePauser(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addPauser(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "mint(uint256,address,uint256)"(_id: BigNumberish, _to: string, _value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "mint(uint256,address[],uint256[])"(_id: BigNumberish, _toList: string[], _values: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addMinter(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceMinter(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;
    totalSupply(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    creators(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    mintBatch(_to: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burn(account: string, id: BigNumberish, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        "paused(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "paused()"(overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "pause(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "pause()"(overrides?: CallOverrides): Promise<void>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "unpause()"(overrides?: CallOverrides): Promise<void>;
        "unpause(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;
        create(_id: BigNumberish, _initialSupply: BigNumberish, _uri: string, overrides?: CallOverrides): Promise<boolean>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        burnBatch(account: string, ids: BigNumberish[], values: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        renouncePauser(overrides?: CallOverrides): Promise<void>;
        addPauser(account: string, overrides?: CallOverrides): Promise<void>;
        "mint(uint256,address,uint256)"(_id: BigNumberish, _to: string, _value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "mint(uint256,address[],uint256[])"(_id: BigNumberish, _toList: string[], _values: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        addMinter(account: string, overrides?: CallOverrides): Promise<void>;
        renounceMinter(overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;
        totalSupply(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        creators(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        mintBatch(_to: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        burn(account: string, id: BigNumberish, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MinterAdded(address)"(account?: string | null): MinterAddedEventFilter;
        MinterAdded(account?: string | null): MinterAddedEventFilter;
        "MinterRemoved(address)"(account?: string | null): MinterRemovedEventFilter;
        MinterRemoved(account?: string | null): MinterRemovedEventFilter;
        "Paused(uint256,address)"(tokenId?: null, account?: null): Paused_uint256_address_EventFilter;
        "Paused(address)"(account?: null): Paused_address_EventFilter;
        "Unpaused(uint256,address)"(tokenId?: null, account?: null): Unpaused_uint256_address_EventFilter;
        "Unpaused(address)"(account?: null): Unpaused_address_EventFilter;
        "PauserAdded(address)"(account?: string | null): PauserAddedEventFilter;
        PauserAdded(account?: string | null): PauserAddedEventFilter;
        "PauserRemoved(address)"(account?: string | null): PauserRemovedEventFilter;
        PauserRemoved(account?: string | null): PauserRemovedEventFilter;
        "TransferSingle(address,address,address,uint256,uint256)"(operator?: string | null, from?: string | null, to?: string | null, id?: null, value?: null): TransferSingleEventFilter;
        TransferSingle(operator?: string | null, from?: string | null, to?: string | null, id?: null, value?: null): TransferSingleEventFilter;
        "TransferBatch(address,address,address,uint256[],uint256[])"(operator?: string | null, from?: string | null, to?: string | null, ids?: null, values?: null): TransferBatchEventFilter;
        TransferBatch(operator?: string | null, from?: string | null, to?: string | null, ids?: null, values?: null): TransferBatchEventFilter;
        "ApprovalForAll(address,address,bool)"(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "URI(string,uint256)"(value?: null, id?: BigNumberish | null): URIEventFilter;
        URI(value?: null, id?: BigNumberish | null): URIEventFilter;
    };
    estimateGas: {
        "paused(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "paused()"(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "pause(uint256)"(_id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "pause()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unpause()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unpause(uint256)"(_id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        create(_id: BigNumberish, _initialSupply: BigNumberish, _uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        burnBatch(account: string, ids: BigNumberish[], values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "mint(uint256,address,uint256)"(_id: BigNumberish, _to: string, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "mint(uint256,address[],uint256[])"(_id: BigNumberish, _toList: string[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isMinter(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        creators(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mintBatch(_to: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burn(account: string, id: BigNumberish, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "paused(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "pause(uint256)"(_id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "pause()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unpause()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unpause(uint256)"(_id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isPauser(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        create(_id: BigNumberish, _initialSupply: BigNumberish, _uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnBatch(account: string, ids: BigNumberish[], values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "mint(uint256,address,uint256)"(_id: BigNumberish, _to: string, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "mint(uint256,address[],uint256[])"(_id: BigNumberish, _toList: string[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isMinter(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creators(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintBatch(_to: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burn(account: string, id: BigNumberish, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=KIP37Token.d.ts.map