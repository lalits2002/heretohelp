// File for shared methods across onboarding screens
import Colors from "../Items/Colors";

// checks if form field has error to change style
export const _setPlaceHolderColor = (field, errorField) => errorField === field && Colors.error || Colors.secondary2
