require 'spec_helper'

describe Spotlight::HomePagesController do
  routes { Spotlight::Engine.routes }
  let(:valid_attributes) { { "title" => "MyString" } }
  let(:page) { FactoryGirl.create(:home_page) }
  let(:exhibit) {page.exhibit}
    

  describe "when signed in as a curator" do
    let(:user) { FactoryGirl.create(:exhibit_curator) }
    before {sign_in user }

    describe "GET index" do
      it "should redirect to the feature pages" do
        get :index, exhibit_id: Spotlight::Exhibit.default
        expect(response).to redirect_to exhibit_feature_pages_path(Spotlight::Exhibit.default)
      end
    end

    describe "GET edit" do
      describe "when the page title isn't set" do
        let(:page) { FactoryGirl.create(:home_page, title: nil) }
        it "should show breadcrumbs" do
          expect(controller).to receive(:add_breadcrumb).with(exhibit.title, exhibit)
          expect(controller).to receive(:add_breadcrumb).with("Feature pages", exhibit_feature_pages_path(exhibit))
          expect(controller).to receive(:add_breadcrumb).with("Exhibit Home", edit_home_page_path(page))
          get :edit, id: page 
          expect(response).to be_successful 
        end
      end
      it "should show breadcrumbs" do
        expect(controller).to receive(:add_breadcrumb).with(exhibit.title, exhibit)
        expect(controller).to receive(:add_breadcrumb).with("Feature pages", exhibit_feature_pages_path(exhibit))
        expect(controller).to receive(:add_breadcrumb).with(page.title, edit_home_page_path(page))
        get :edit, id: page 
        expect(response).to be_successful 
      end
    end
    describe "POST create" do
      it "redirects to the feature page index" do
        post :create, home_page: {title: "MyString"}, exhibit_id: Spotlight::Exhibit.default
        response.should redirect_to(exhibit_home_pages_path(Spotlight::Exhibit.default))
      end
    end
    describe "PUT update" do
      it "redirects to the feature page index action" do
        put :update, id: page, exhibit_id: page.exhibit.id, home_page: valid_attributes
        response.should redirect_to(exhibit_home_pages_path(page.exhibit.id))
      end
    end
  end

  describe "Rendering home page" do
    it "should get search results for display facets" do
      expect(controller).to receive(:add_breadcrumb).with(exhibit.title, exhibit)
      controller.stub(get_search_results: [double, double])
      get :show, id: page.id
      expect(assigns[:response]).to_not be_blank
      expect(assigns[:document_list]).to_not be_blank
      expect(assigns[:page]).to eq page
    end
  end
end