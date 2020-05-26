import {UsersApi} from "../Api/UsersApi";
import {ThunkAction} from "redux-thunk";
import { RootState } from "./Redux-store";

const followType = 'FOLLOW';
const unfollowType = 'UNFOLLOW';
const newUsers = 'ADD-USERS';
const setTotalUsersCount = 'SET-TOTAL-COUNT';
const setCurrentPageType = 'SET-CURRENT-PAGE';
const setLoadingType = 'SET-LOADING';
const setFollowingProgressType = 'FOLLOWING-PROGRESS';


export type usersType = {
    id: number,
    followed: boolean,
    name: string | null,
    status: string | null,
    photos: {
        small: string | null,
        large: string | null
    }
}

let initialUsers = {
    users: [] as Array<usersType>,
    pageSize: 25 as number | null,
    totalCount: 23 as number | null,
    currentPage: 1 as number | null,
    isLoading: false,
    followingProgress: [] as Array<number>
};

type usersStateType = typeof initialUsers

type followAcceptActionType = {
    type: typeof followType,
    id: number
}
export let followAccept = (id: number): followAcceptActionType => {
    return {type: followType, id}
};

type unfollowAcceptActionType = {
    type: typeof unfollowType,
    id: number
}
export let unfollowAccept = (id: number): unfollowAcceptActionType => {
    return {type: unfollowType, id: id}
};

type setTotalCountActionType = {
    type: typeof setTotalUsersCount,
    totalCount: number
}
export let setTotalCount = (totalCount: number): setTotalCountActionType => {
    return {type: setTotalUsersCount, totalCount}
};

type setCurrentPageActionType = {
    type: typeof setCurrentPageType,
    currentPage: number
}
export let setCurrentPage = (currentPage: number): setCurrentPageActionType => {
    return {type: setCurrentPageType, currentPage}
};

type setLoadingActionType = {
    type: typeof setLoadingType,
    loading: boolean
}
export let setLoading = (loading: boolean): setLoadingActionType => {
    return {type: setLoadingType, loading}
};

type setFollowingActionType = {
    type: typeof setFollowingProgressType,
    following: boolean,
    userId: number
}
export let setFollowing = (following: boolean, userId: number): setFollowingActionType => {
    return {type: setFollowingProgressType, following, userId}
};

type setUsersActionType = {
    type: typeof newUsers,
    users: Array<usersType>
}
export let setUsers = (users: Array<usersType>): setUsersActionType => {
    return {type: newUsers, users}
};

type usersActionsType =
    | followAcceptActionType
    | unfollowAcceptActionType
    | setUsersActionType
    | setTotalCountActionType
    | setCurrentPageActionType
    | setLoadingActionType
    | setFollowingActionType

let UsersReducer = (state = initialUsers, action: usersActionsType): usersStateType => {
    switch (action.type) {

        case followType:
            return {
                ...state,
                users: state.users.map(data => {
                    if (data.id === action.id) {
                        return {...data, followed: true}
                    }
                    return data
                })
            };

        case unfollowType:
            return {
                ...state,
                users: state.users.map(data => {
                    if (data.id === action.id) {
                        return {...data, followed: false}
                    }
                    return data
                })
            };

        case newUsers:
            return {
                ...state,
                users: action.users
            };

        case setTotalUsersCount:
            return {
                ...state,
                totalCount: action.totalCount
            };

        case setCurrentPageType:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case setLoadingType:
            return {
                ...state,
                isLoading: action.loading
            };

        case setFollowingProgressType:
            return {
                ...state,
                followingProgress: action.following
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)

            };

        default:
            return state
    }
};

export const unfollow = (id: number): ThunkAction<void, RootState, unknown, usersActionsType> => async (dispatch) => {
    dispatch(setFollowing(true, id));
    let response = await UsersApi.deleteFollow(id);
    if (response.data.resultCode === 0) {
        dispatch(unfollowAccept(id));
        dispatch(setFollowing(false, id))
    }
};


export const follow = (id: number): ThunkAction<void, RootState, unknown, usersActionsType> => async (dispatch) => {
    dispatch(setFollowing(true, id));
    let response = await UsersApi.postFollow(id);
    if (response.data.resultCode === 0) {
        dispatch(followAccept(id));
        dispatch(setFollowing(false, id))
    }
};


export const getUser = (currentPage: number | null, pageSize: number | null): ThunkAction<void, RootState, unknown, usersActionsType> => async (dispatch) => {
    dispatch(setLoading(true));
    let response = await UsersApi.getUsers(currentPage, pageSize);
    dispatch(setLoading(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalCount(response.totalCount))
};

export default UsersReducer

