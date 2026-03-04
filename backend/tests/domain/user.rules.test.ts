import { describe, it, expect } from "vitest";
import { Role } from "../../src/domain/user/user.types.js";
import {
  createUser,
  normaliseEmail,
  validatePassword,
  InvalidPasswordError,
  InvalidEmailError,
} from "../../src/domain/user/user.rules.js";

describe("User domain rules", () => {
  describe("normaliseEmail", () => {
    it("throws if email has no @ or .", () => {
      expect(() => normaliseEmail("invalidemail")).toThrow(InvalidEmailError);
    });

    it("throws if email contains spaces", () => {
      expect(() => normaliseEmail("bad email@test.com")).toThrow(
        InvalidEmailError,
      );
    });

    it("should trim and make email lowercase", () => {
      const result = normaliseEmail("   EMAIL@email.com");
      expect(result).toBe("email@email.com");
    });
  });

  describe("validatePassword", () => {
    it("throws if password is too short", () => {
      expect(() => validatePassword("Short1!")).toThrow(InvalidPasswordError);
    });

    it("throws if no uppercase letter", () => {
      expect(() => validatePassword("password!")).toThrow(InvalidPasswordError);
    });

    it("throws if no special character", () => {
      expect(() => validatePassword("Password1")).toThrow(InvalidPasswordError);
    });

    it("accepts valid password", () => {
      expect(() => validatePassword("Password!")).not.toThrow();
    });
  });

  describe("createUser", () => {
    const baseInput = {
      id: "666",
      email: "    ELECTRONIC@mail.com",
      passwordHash: "hashed-password",
    };

    it("creates a valid user with normalised email", () => {
      const user = createUser(baseInput);

      expect(user.id).toBe("666");
      expect(user.email).toBe("electronic@mail.com");
      expect(user.passwordHash).toBe("hashed-password");
      expect(user.role).toBe(Role.CUSTOMER);
    });

    it("sets createdAt and updatedAt timestamps", () => {
      const user = createUser(baseInput);

      expect(user.createdAt).toBeInstanceOf(Date);
      expect(user.updatedAt).toBeInstanceOf(Date);

      expect(user.createdAt.getTime()).toBe(user.updatedAt.getTime());
    });

    it("respects a provided role", () => {
      const user = createUser({
        ...baseInput,
        role: Role.ADMIN,
      });

      expect(user.role).toBe(Role.ADMIN);
    });

    it("throws if email is invalid", () => {
      expect(() =>
        createUser({
          ...baseInput,
          email: "invalid-email",
        }),
      ).toThrow(InvalidEmailError);
    });
  });
});
