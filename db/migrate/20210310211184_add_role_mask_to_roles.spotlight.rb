# This migration comes from spotlight (originally 20190612182308)
class AddRoleMaskToRoles < ActiveRecord::Migration[5.2]
  def change
    add_column :spotlight_roles, :role_mask, :string
  end
end
