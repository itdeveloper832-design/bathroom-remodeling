# Firebase Removal Notes

This project has been updated to run without Firebase.

## What was removed

- `firebase` npm dependency
- `lib/firebase.ts`
- `firestore.rules`
- Firebase-specific environment variables from `.env.example`

## What was updated

- Form submissions (`quote` and `contact`) now run in local-only mode and no longer call Firestore.
- Admin auth context no longer uses Firebase Auth.
- Server action modules for blog, gallery, leads, and testimonials now use in-memory fallback data.
- Admin settings page updated to reflect non-Firebase data mode.

## Build status

- Production build passes with `pnpm build`.

